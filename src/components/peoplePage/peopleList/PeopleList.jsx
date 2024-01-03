import styles from './PeopleList.module.css'
import React from 'react'

const PeopleList = ({ people }) => {
  return (
    <>
        <ul className={styles.lits__container}>
          {people.map(({id, name, img}) => 
            <li className={styles.list__item} key={id}>
                <a href='#'>
                    <img className={styles.person__photo} src={img} alt={name}/>
                    <p>{name}</p>
                </a>
            </li>
          )}
        </ul>
    </>
  )
}

export default PeopleList