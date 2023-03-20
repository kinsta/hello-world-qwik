![Qwik](https://user-images.githubusercontent.com/2342458/226346990-667a72db-dd1a-4a6a-a024-dc3341a056f8.png)

# Kinsta - Hello World - Static Site With Qwik

An example of how to deploy a static site built with Qwik on Kinsta App Hosting services.

---
Kinsta is a developer-centric cloud host / PaaS. We’re striving to make it easier for you to share your web projects with your users. Focus on coding and building, and we’ll take care of deployment and provide fast, scalable hosting. + 24/7 expert-only support.

- [Start your free trial](https://kinsta.com/signup/?product_type=app-db)
- [Application Hosting](https://kinsta.com/application-hosting)
- [Database Hosting](https://kinsta.com/database-hosting)

## Dependency Management

During the deployment process Kinsta will automatically install dependencies defined in your `package.json` file.

## Web Server Setup

### Port

Kinsta automatically sets the `PORT` environment variable. You should **not** define it yourself and you should **not** hard-code it into the application. The `serve` packageutilizes the port set by Kinsta automatically.

### Start Command

When deploying an application Kinsta will automatically create a web process with `npm start` as the entry point. Make sure to use this command to run your server.

## Deployment Lifecycle

Whenever a deployment is initiated (through creating an application or re-deploying due to an incoming commit) the `npm build` command is run, followed by the `npm start` command.

## What is Qwik
**Qwik** is a new kind of web framework that can deliver instant loading web applications at any size or complexity. Your sites and apps can boot with about 1kb of JS (regardless of application complexity), and achieve consistent performance at scale.

More info on the [Qwik](https://qwik.builder.io/) website.
