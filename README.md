# Notifications Microservice | Clean Architecture and SOLID

![banner](banner.png)

> Project carried out at the  Rocketseat's `Ignite Lab |Node.js`, in this event we built a small notifications microservice using the
> best practices for developing scalable and maintainable backend applications, applying various concepts related to `Clean Architecture`,
> like `SOLID principles`, `Design Patterns` and `Domain-Driven Design` for example. We also create `unit and automated tests` to test different
> `use cases` of the application. And at the end of the event, we integrated our application with `Apache Kafka` (an open-source platform for broadcasting
> of data in a continuous stream. That is, it is a high-performance, real-time messaging system).

:arrow_right: Microservices <br /> 
:arrow_right: Domain-Driven Design (DDD) <br /> 
:arrow_right: Project Architecture and Code Design <br />
:arrow_right: Nest.js | A progressive Node.js framework <br />
:arrow_right: Messaging systems <br />

<br />

## Microservices 

In software engineering, a `microservices architecture` consists of a `set of independent services limited in scope to a single business function`, called microservices. There is no single definition for the term, but component independence and limited liability are common features of this architecture, in contrast to a `monolithic` application. Another common characteristic is the communication between processes through lightweight protocols, usually HTTP.

Microservices are an `architectural and organizational approach` to software development in which the software consists of `small independent services that communicate using well-defined APIs`. These services belong to small, self-sufficient teams.

Microservices architectures facilitate scalability and streamline application development, enabling innovation and accelerating time to market for new features.

### Differences between monolithic and microservice architectures

With monolithic architectures, `all processes are highly coupled and run as a single service`. This means that if an application process experiences a spike in demand, the entire architecture must scale. The complexity of adding or enhancing features of monolithic applications increases as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures increase application availability risk because many dependent and highly coupled processes increase the impact of a single process failure.

With a microservices architecture, an application is built as `independent components that run each application process as a service`. These services communicate through a <strong>well-defined interface using lightweight APIs</strong>. Services are created for enterprise resources and `each service performs a single function`. Because they run independently, each service can be updated, deployed, and scaled to meet the demands of specific application functions.

> Microservices must be separated by `domains` (areas of understanding/context that define a certain scope of the business rule), within these domains we can have similar `entities` but with different properties. And each microservice has its `own structure`, be it storage or application. 
 
*<i>aws.amazon.com/microservices/?nc1=h_ls</i> <br />

<br />

## Domain-Driven Design (DDD)

Domain-Driven Design, also known by the acronym DDD, provides a framework for decision-making by combining software design and development practices.

`Centered on business logic, or domain`, its basic idea proposes, through a collection of standards and design principles, to help the entire development cycle, to build applications that reflect the real understanding of business processes and rules.

DDD is beyond the way of thinking, designing and developing software, even though it is not an architectural pattern, it affects how decisions to build software are made.

### Understanding the Domain Driven Design

To define Domain-Driven Design, we first need to consolidate our understanding of `Domain`. The term is extremely relevant, since `our design is now guided by this keyword`, which `simply represents the reason the software exists`.

 > The need for software to be built is related to a delimited context of ideas, knowledge, processes and problems that one wants to solve, in which a company is inserted.

Bringing it to the real world, the `domain` of our project will be formed by all the knowledge absorbed about the company, as well as the model it operates.

This means observing the involvement of `business rules, processes and possible integrations with existing systems as part of the solution`, whether internal, from partners or suppliers.

Therefore, the Domain represents the heart of the business we are working on, with all its rules and peculiarities that DDD aims to attack, as is explicit in the title of Evans' book: “Attacking the complexities at the heart of software”.

### Strategic Design vs Tactical Design

DDD introduces us to two types of design tools.

The first one helps us solve problems related to `software modeling`, the strategic design.

While tactical design, which takes place after the strategic phase, focuses on product development, focused on the `implementation details`.

`Strategic design` brings together a set of principles and standards, to `divide a complex business problem into several blocks with clear boundaries and specific responsibilities`, thus building a topology of top-level software design.

The `tactical design`, in turn, has `a set of abstraction patterns of medium and low level components of the software`. With its practical standards, the tactician refines the result of the applied strategic design, converting it into code.

Domain-Driven Design is an evolving process consisting of iterative cycles of applying strategic and tactical design. You start with strategic design, followed by tactical design.

Developers play with tactical design tools, but if we have knowledge and a good understanding of strategic design tools, it will help us to architect better software.


### Ubiquitous Language

> Developers, with their technical bias, think about how to transform the business need into objects, relationships between them, apply abstraction, inheritance, polymorphism, patterns, frameworks, among others.

Domains Experts, in turn, know the business in depth, but are unaware of these terminologies.

Taking into account that `the software does not deal well with ambiguities`, the `Ubiquitous Language comes into play building a common language`, shared by the entire team, regardless of their role in the project. In order to reduce the conundrum exposed by James Shore in the text below.

“It's an enigma. People who are domain experts – the domain experts – are rarely qualified to write software. The people who are qualified to write software – the programmers – don't always understand the problem domain.”

`By applying it, we translate technical terms into expressions understandable to everyone involved, the same goes for the terminologies used by the business, generating an intersection between the parties.`

This joint work generates a short feedback loop, strengthening ties between business specialists and the development team, thus producing software that makes more sense for the business.


### Tactical Design

Tactical Design groups together a set of tools to be used in the construction of your `domain model`, applied in a `single delimited context`, refining the result of the work carried out through the tools of Strategic Design.

When Tactical Design patterns are used correctly, you can enrich your domain model (Domain Models), which will consequently reflect the business more clearly in the developed software. As shown below, Tactical Design can be divided into two groups.

<div align="center">
<img src="domain-layer.jpg" width="500" />
</div>

- <strong>Domain Models</strong>

Domain Models maintain the structured knowledge of the problem to be solved with the software, `representing the vocabulary and key concepts of the domain`, identifying the relationships between all entities, acting as a communication tool, together with the ubiquitous language.

`It should clearly represent the problem being solved`, as well as the proposed solution. It can also be expressed through a diagram, or even written documentation, as long as it is accessible and understandable by everyone involved in the project.

 - <strong>Domain Service</strong>

Domain Services `represents a stateless structure that provides real-world business behaviors`, as it is a domain extension, it works with flows of various entities and aggregations. As it is only relevant to `business logic`, it should not touch on technical details.

Simply put, we can understand that it absorbs Domain responsibilities that the Model could not perform.

As the domain model generally deals with more refined behaviors that focus on some specific aspects of the business, a domain service tends to follow the same principles, providing solutions for business contexts that are too complex to be stored in a single Entity or Object. of value.

The Domain Service bears no resemblance to Services at other tiers, except for the name.

*<i>zup.com.br/blog/domain-driven-design-ddd</i> <br />

