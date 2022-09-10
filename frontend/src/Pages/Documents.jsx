import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from "axios"

const Documents = () => {

  const [data, setData] = useState([]);
  // console.log(data)

  const getUserData = async () => {
      const res = await axios.get("/getdata", {
          headers: {
              "Content-Type": "application/json"
          }
      });

      if (res.data.status === 401 || !res.data) {
          console.log("errror")
      } else {
          setData(res.data.getUser)
      }

  }

  const dltUser = async (id) => {
      const res = await axios.delete(`/${id}`, {
          headers: {
              "Content-Type": "application/json"
          }
      });

      if (res.data.status === 401 || !res.data) {
          console.log("errror")
      } else {
          console.log("user delete");
      }
  }

  useEffect(() => {
      getUserData()
  }, [dltUser])


  return (
            <div>
                
                <div className={styles.mapping_main_div}>

                    {
                        data.length > 0 ? data.map((elem, i) => {
                            return (
                                <>
                                <div className={styles.borders_box_div} >            
                                            <div>
                                                <file src={`/uploads/${elem.imgpath}`} />
                                            </div>                                                                             
                                            <button onClick={() => dltUser(elem._id)}>
                                                Delete
                                            </button>                                   
                                </div>
                                </>
                            )
                        }) : ""
                    }
                </div>
            </div>
    )
}

export default Documents