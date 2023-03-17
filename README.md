<div align="center">
  <img src="logo.svg" width="250" />
</div>

<h1 align="center">
 Notifications Microservice, Backend Service
</h1>

A notifications microservice backend project using Node.js, Nest.js, TypeScript, Fastify, Prisma, Jest, KafkaJS and Prettier is a software application developed for a distributed application that uses a microservices architecture to handle notifications .

In summary, this notifications microservice project uses various technologies to provide a distributed, scalable and reliable service to notify users on various scenarios such as new messages, password changes, event notifications, etc.

## :hammer_and_wrench: Tools

* Node.js
* Nest.js
* TypeScript
* Fastify
* Prisma
* Jest
* KafkaJS
* Prettier

## :mailbox_with_mail: Utilities
 
### <strong>Solid</strong>
 
The SOLID principle is a set of five object-oriented programming principles that seek to improve code quality and maintainability.

SOLID is an acronym that stands for the following principles:

 - <strong>S (Single Responsibility Principle)</strong>: each class or module should have a single responsibility.
 - <strong>O (Open/Closed Principle)</strong>: software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
 - <strong>L (Liskov Substitution Principle)</strong>: objects from a child class must be able to be used as objects from their parent class without breaking the program.
 - <strong>I (Interface Segregation Principle)</strong>: Interfaces should be small and specific to each client that uses them, rather than a single large interface that encompasses all functionality.
 - <strong>D (Dependency Inversion Principle)</strong>: high-level modules should not depend on low-level modules, both should depend on abstractions.

These principles are guides for software developers to write code that is easier to understand, modify, and test. By following these principles, code tends to be more modular, cohesive, and flexible, allowing changes to be made with less impact on other parts of the system.

### <strong>Modules</strong>

NestJS is a framework for Node.js that uses the concept of module-based software architecture. In NestJS, modules are responsible for organizing and grouping related components such as controllers, service providers, data models and others. These modules can be easily reused in other projects and make the structure of a project easier to understand and maintain.

Module directories in NestJS are folders that contain one or more files that define a system-specific module. A module directory contains all files related to that module, including controllers, service providers, data models, and so on.

Inside the module directory, there are three main file types:

 - <strong>module.ts</strong>: file that defines the module itself, where the components that the module contains and the dependencies it has on other modules are declared.
 - <strong>controller.ts</strong>: file that defines the controller, which is responsible for receiving HTTP requests and forwarding them to the appropriate service.
 - <strong>service.ts</strong>: file that defines the service provider, which is responsible for implementing the system's business logic.

Module directories are organized hierarchically according to the system structure. In a typical NestJS project, there might be a module root directory that contains subdirectories for specific modules such as auth, users, and products.

Modules in NestJS are designed to be independent and highly cohesive. Each module must have a unique and clearly defined responsibility within the system. This approach helps keep system code organized and easy to understand, especially on large and complex projects.

### <strong>Microservice</strong>

Microservices is a style of software architecture that divides a complex system into smaller, independent modules, each responsible for a specific business function. Each microservice is a standalone application, with its own codebase, database, API, and deployment processes.

This approach allows the development team to work more efficiently and faster, as each microservice can be developed and deployed independently, without needing to coordinate with other services. In addition, this architecture makes it easier to scale and update specific parts of the system without affecting the entire system.

Each microservice is generally responsible for a single business functionality, being an independent and autonomous service unit. Communications between microservices are usually done through APIs, which can be synchronous or asynchronous. Microservices are often deployed in containers, such as Docker, for ease of management and scalability.

Microservices architecture is widely used in modern technology companies such as Netflix, Uber, Airbnb, among others. However, it is important to note that this approach also presents challenges, such as the complexity of communication between services, the need for constant monitoring and the management of different databases.

### <strong>Messaging Service</strong>

Messaging services like KafkaJS are often used in microservice architectures to provide asynchronous communication between different components of the distributed system. These messaging services act as intermediaries between the different services, allowing them to exchange messages with each other asynchronously, without worrying about the availability or location of the other service.

For example, suppose a service needs to send information to another service. Rather than calling the receiving service directly and waiting for a response, the sending service posts a message to a messaging service topic, indicating the type of message and relevant information. The receiving service is then configured to listen for that topic and process incoming messages. This way, the services don't need to know each other or communicate directly, allowing them to be updated or scaled independently of each other.

KafkaJS is a JavaScript client for Apache Kafka, which is a high-performance, low-latency messaging system widely used in microservice architectures. Kafka provides features such as fault tolerance, horizontal scalability, and data striping, making it a popular choice for handling large message volumes in distributed environments. KafkaJS allows application developers to create, produce, and consume Kafka messages in their Node.js applications, making it a valuable tool for anyone working with microservice architectures.

## :speech_balloon: Explanations

### Entities and Value Objects (VOs)

In software development, entities and value objects are important concepts in data modeling. They are used to represent real-world objects in a software system.

An entity is an object with a unique identity that can change over time and that is distinct from other objects. Examples of entities might include a user, a product, or an order. Entities are usually represented by classes in object-oriented languages.

A value object is an object that represents a value, not a distinct entity. Examples of valuables might include a currency, a date, or an address. Value objects are usually represented by immutable classes in object-oriented languages.

The fundamental difference between the two is that entities have a unique identity that makes them distinct from other entities, while value objects do not have this unique identity. Also, entities can change over time, while value objects are immutable.

In short, entities and value objects are concepts used to model real-world objects in a software system, and are critical in creating a consistent and efficient data model.

 - <strong>Entities</strong>
 
```ts
// server/src/application/entities/notification.ts

import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }
  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
```
> *Example of an entity.*
 
An entity appears in the conversation with the domain expert as <strong>nouns</strong> to be associated with a certain scope of the problem, such as: "issue an invoice, register an employee or register a customer", invoice, employee and customer are entities in a given domain.

 - <strong>Value Objects (VOs)</strong>

```ts
// src/application/entities/content.ts

export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content)
    if (!isContentLengthValid) {
      throw new Error('Content length error.')
    }
    this.content = content;
  }
}
```
> *Example of a value object.*

Value Objects have their own identity and any change in their value has another object, without changing the identity, at the same time that if two distinct objects have exactly the same state they can be considered equal.

Value Objects are usually immutable and small. They represent something unique, such as very simple quantifications or descriptions.

### Use Cases Specifications 

A use case specification captures the requirements of a system in the form of use cases described in logical and sequential steps, so that they can meet the real needs of the user, and so that developers and testers can use these specifications described in the document use cases to be able to develop and test the specified functionalities.

> *It is recommended to separate the business logic (which may vary over time) from the entity class to a specific class for the business rule.*

### Repository Pattern

The Repository Pattern allows for encapsulation of data access logic, leveraging the use of <strong>Dependency injection (DI)</strong> and providing a more object-oriented view of interactions with the <strong>Data Access Layer (DAL)</strong>. Its use contributes to the isolation of the DAL with the business layer, better known as the domain layer.

Using this pattern, we apply the principle of <strong>Persistence Ignorance (PI)</strong> to our domain layer, that is, our business layer entities should not be impacted by the way they are persisted in the database.

```ts
// server/src/application/repositories/notifications-repository.ts

import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
```
> *Notification entity repository.*

A repository is an interface/collection of abstract methods that allow access to an entity's data, the idea is that this interface abstracts that it is dealing with the persistent environment, since the implementation of this interface will determine a contract, which should make the implementation logic of these abstract methods, so we have the freedom to be able to have totally distinct implementations that are independent of which method is performed, the database, frameworks or libraries. A repository is unaware of all this, the concrete implementation only needs to fulfill the interface or the contract using the same signature as the abstract method of that repository.

They create their dependencies or they are injected somehow. But their interfaces do not know. A repository can be defined as an interface, which any concrete class will implement. This class can even add more methods, but nobody will know they exist, because the class will always be behind an abstraction, which is the interface.

> *In software engineering, dependency injection is a design pattern in which an object or function is given other objects or functions that it depends on.*

See the implementations:

```ts
// server/src/application/use-cases/get-recipient-notifications.ts

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
```
> *A use case that calls a method from the repository.*
<br />

```ts
// server/src/infra/http/controllers/notifications.controller.ts

@Controller('notifications')
export class NotificationsController {
  constructor(
    // ...
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
  ) {}

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {

    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }
}
```
> *HTTP layer calling a use case method.*
<br />

```ts
// server/src/infra/database/prisma/repositories/prisma-notifications-repository.ts

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {

    const notifications = await this.prisma.notification.findMany({
      where: {
        recipientId,
      },
    });

    return notifications.map(PrismaNotificationMapper.toDomain);
  }
}
```
> *Implementation in the persistence layer of the repository's findManyByRecipientId method.*
<br />

```ts
// test/repositories/in-memory-notifications-repository.ts

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];


  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
  
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }
}
```
> *Implementation in the memory layer of the repository's findManyByRecipientId method.*

### Factory Pattern

> *input -> validation -> compute -> return/output*

Creating an object often requires complex processes not appropriate to include within the object's composition. Creating the object might require significant code duplication, might need information not accessible to the object's composition, might not provide a sufficient degree of abstraction, or might not be part of the object's composition concerns. The factory method design pattern handles these problems by defining a separate method for creating objects, which subclasses can override to specify the "derived type" of the product to be created.

A factory is responsible for creating objects or instantiating classes following some commonly reusable model in the application. One of the reasons for creating factories is code isolation/encapsulation/decoupling and always following a certain model when creating an object that can be overwritten.

Simple application of a Factory:

```ts
// server/test/factories/notifications-factory.ts

import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Nova solicitação de amizade!'),
    category: 'social',
    recipientId: 'recipient-id',
    ...override,
  });
}
```

```ts
// server/src/application/use-cases/get-recipient-notification.spec.ts

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'another-recipient-id' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-id',
    });

    // ...
  });
});
```

<p align="center">Project made with :blue_heart: by <a href="https://github.com/stardusteight-d4c">Gabriel Sena</a></p>
