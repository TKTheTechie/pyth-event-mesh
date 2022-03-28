# Pyth Event Mesh

This application is a sample implemntation of Pyth -> Solace PubSub+ Feedhandler. You can see the corresponding blogpost over [here](https://tkthetechie.io/why-the-pyth-network-needs-an-event-mesh)

## Installing 

This project uses [node](https://nodejs.org)

```bash
npm install
```

## Configuring the web-app with a Solace PubSub+ Broker

Spin up a Solace PubSub+ broker [container](https://solace.com/products/event-broker/software/getting-started/) or [in the cloud](https://docs.solace.com/Cloud/ggs_signup.htm).

Modify `./src/config/solace-config.ts` with the appropriate username and credentials. If using Solace Cloud, you can retrieve the credentials from the Web Messaging section of the Connect Tab of a Solace cloud instance as shown below:


![Solace-WS](https://github.com/TKTheTechie/ml-cv-trader-ui/raw/master/solace-ws-connection-example.png)


## Developing

Once you've installed dependencies with `npm install`, start a development server using the following command:

```bash
npm run dstartev
```

## Building

To create a production version of this app:

```bash
npm run build
```

You can preview the production build with `npm run prod`.

