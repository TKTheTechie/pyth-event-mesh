import { Cluster, clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'
import { PythConnection } from './PythConnection'
import { getPythProgramKeyForCluster } from './cluster'
import { PriceStatus } from './decoder'
import { SolaceClient } from './solace-client';



const SOLANA_CLUSTER_NAME: Cluster = 'devnet';
const connection = new Connection(clusterApiUrl(SOLANA_CLUSTER_NAME));
const pythPublicKey = getPythProgramKeyForCluster(SOLANA_CLUSTER_NAME);
const solaceClient = new SolaceClient();

const pythConnection = new PythConnection(connection, pythPublicKey);

pythConnection.onPriceChange((product, price) => {
  // sample output:
  // SRM/USD: $8.68725 ±$0.0131
  if (price.price && price.confidence) {
    //convert the symbol to a Solace topic
    let topic = product.symbol.replace(".", "/");
    // tslint:disable-next-line:no-console
    console.log(`${product.symbol}: ${price.price} \xB1${price.confidence}`)
    solaceClient.publishDirect(topic, `{"price":${price.price},"confidence":"${price.confidence}"}`);
  } 
})

// tslint:disable-next-line:no-console
console.log('Reading from Pyth price feed...');


solaceClient.connect().then((message: string) => {
  pythConnection.start();
});

