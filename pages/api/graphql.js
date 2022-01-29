import {ApolloServer,gql} from 'apollo-server-micro';
import Cors from 'micro-cors';

const cors = Cors();

export const config = {
    api : {
        bodyParser : false
    }
}

const typeDefs = gql`
    type Query{
        name: String!
    }
`

const resolvers = {
    Query: {
        name : () => {
            return "Jewoo";
        }
    }
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

const startServer = apolloServer.start();

export default cors(async function(req,res){

    if(req.method ==='OPTIONS'){
        res.end();
        return;
    }

    await startServer;

    await apolloServer.createHandler({
        path: '/api/graphql'
    })(req,res);
});