import React from 'react'
import Tabs from '../../components/Tabs'

const Setting = ({showAddPayment,setShowAddPayment}) => {
  return (
    <div>
        <Tabs showAddPayment={showAddPayment} setShowAddPayment={setShowAddPayment}/>
    </div>
  )
}

export default Setting