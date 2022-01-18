import * as React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
      <div>
            <div>
                <img src="https://www.notebookcheck-ru.com/uploads/tx_nbc2/4zu3_mbp.jpg"></img>
            </div>
            <div className={s.descritionBlock}>
              Ava + description
            </div>
      </div>
    )
}

export default ProfileInfo