import React, { Component } from 'react'
import { View } from 'react-native'

import PaymentItem from '../../components/PaymentItem.js'

export default class ProfileContent extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <View>
            <PaymentItem
               type='Address'
               identifier='address'
            />
            <PaymentItem
               type='City'
               identifier='city'
            />
            <PaymentItem
               type='State'
               identifier='area'
            />
            <PaymentItem
               type='Country'
               identifier='country'
            />
            <PaymentItem
               type='Card no.'
               identifier='card'
            />
         </View>
      )
   }
}
