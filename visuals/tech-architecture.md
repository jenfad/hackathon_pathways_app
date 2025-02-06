```mermaid
graph TD
    subgraph "Frontend Layer"
        A[Web Application]:::frontend
        B[Mobile App]:::frontend
    end

    subgraph "API Layer"
        C[API Gateway]:::api
        D[Authentication Service]:::service
        E[Document Processing API]:::service
    end

    subgraph "Core Services"
        F[Credential Extraction & Translation]:::process
        G[Job Matching]:::process
    end

    subgraph "Data Layer"
        H[(Skills Database)]:::data
        I[(Document Store)]:::data
        J[(Job Database)]:::data
    end

    subgraph "External Integrations"
        K[Partnership Programs]:::external
    end

    %% Frontend Layer interacting with API Layer
    A & B --> C
    C --> D & E

    %% API Layer interacting with Core Services
    D & E --> F & G

    %% Core Services interacting with Data Layer
    F --> H & I
    G --> H & I & J

    %% Core Services interacting with External Integrations
    G --> K

    %% F is an input for G (position adjustment for clarity)
    F -.-> G

    %% Define styles for each class with muted colors
    classDef frontend fill:#7fa6c1,stroke:#6f8fbd,color:white;
    classDef api fill:#f2c94c,stroke:#e1ad2d,color:white;
    classDef service fill:#a1c9a5,stroke:#86b67d,color:white;
    classDef process fill:#5fae6e,stroke:#4b8c4b,color:white;
    classDef data fill:#b58bd1,stroke:#9a73a3,color:white;
    classDef external fill:#e77471,stroke:#e25d4f,color:white;