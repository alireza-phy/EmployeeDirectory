import {createServer, Model, Response} from 'miragejs';
import ContactData from "./components/ContactData/ContactData";

export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,
        models: {
            contact: Model,
        },

        seeds(server) {
            ContactData.map(item => server.create('contact', item));
        },

       routes() {
            this.namespace = '/api';
            this.get('/contacts', (schema) => {
                    return schema.contacts.all();
                }
            );
            // this.get('/Employee/:id', (schema, request) => {
            //         const id = request.params.id;
            //         let emplyeeId = schema.Employees.find(id);
            //         if (emplyeeId) return emplyeeId;
            //         else
            //             return new Response(404, {}, {error: `movie with this title not found`});
            //     }
            // );
        }
    });
    return server
}