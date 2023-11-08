declare module 'swaggerOptions.json' {
  interface Server {
    url: string
  }

  interface Info {
    title: string
    version: string
    description: string
  }

  export interface SwaggerOptions {
    definition: {
      openapi: string
      info: Info
      servers: Server[]
    }
    apis: string[]
  }
}
