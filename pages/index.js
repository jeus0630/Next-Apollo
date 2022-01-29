import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useQuery, gql} from "@apollo/client";

const GET_NAME = gql`
  query{
    name
  }
`

export default function Home() {
    const {error, loading, data} = useQuery(GET_NAME);

    return (
        <div className={styles.container}>
          {data && data.name}
        </div>
    )
}

export const getServerProps = async () => {

}