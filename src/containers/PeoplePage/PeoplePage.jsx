import React, { useEffect, useState } from 'react'
import styles from './PeoplePage.module.css'
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'
import PeopleList from '../../components/peoplePage/peopleList/PeopleList'
import { WithErrorApi } from '../../hoc-helpelrs/withErrorApi'

const PeoplePage = () => {
  const [people, setPeople] = useState(null)


  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({name, url}) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)
  
        return {
          name,
          url,
          img
        }
      })
      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }


  useEffect(() => {
      getResource(API_PEOPLE)
  }, [])
  

  return (
    <>
      <h1>Navigation</h1>
      {people && <PeopleList people={people}/>}
    </>
  )
}

export default WithErrorApi(PeoplePage);