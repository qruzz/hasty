import React, { Component } from 'react'
import { View } from 'react-native'

import PaymentItem from '../../components/PaymentItem.js'

export default class ProfileContent extends Component {
   render() {
      return (
         <View>
            <PaymentItem
               type='Address'
               value='input'
            />
            <PaymentItem
               type='City'
               value='input'
            />
            <PaymentItem
               type='State'
               value='input'
            />
            <PaymentItem
               type='Country'
               value='input'
            />
            <PaymentItem
               type='Card no.'
               value='input'
            />
         </View>
      )
   }
}
