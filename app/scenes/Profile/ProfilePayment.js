import React, { Component } from 'react'
import { View } from 'react-native'

import PaymentItem from '../../components/PaymentItem.js'

import { database } from '../../services/Firebase.js'
import { userID } from '../Authentication/Functions.js'

export default class ProfileContent extends Component {
   constructor(props) {
      super(props)

      this.state = {
         address: 'input',
         city: 'input',
         area: 'input',
         country: 'input',
         card: 'input'
      }
   }

   // componentDidMount() {
   //    // TODO: Append users with + userID: '/users/' + userID
   //    database.ref('/users/10212492588289260').once('value').then(function(snapshot) {
   //       if (snapshot.val().country !== ""){
   //          // console.log(snapshot.val().country)
   //          this.setState({country: snapshot.val().country})
   //          // console.log(this.state.country)
   //       }
   //
   //       if (snapshot.val().address !== "") {
   //          this.setState({address: snapshot.val().address})
   //       } else if (snapshot.val().city !== "") {
   //          this.setState({city: snapshot.val().city})
   //       } else if (snapshot.val().area !== "") {
   //          this.setState({area: snapshot.val().area})
   //       } else if (snapshot.val().country !== "") {
   //          this.setState({country: snapshot.val().country})
   //       } else if (snapshot.val().card !== "") {
   //          this.setState({card: snapshot.val().card})
   //       }
   //    }.bind(this))
   // }

   render() {
      return (
         <View>
            <PaymentItem
               type='Address'
               value={this.state.address}
               identifier='address'
            />
            <PaymentItem
               type='City'
               value={this.state.city}
               identifier='city'
            />
            <PaymentItem
               type='State'
               value={this.state.area}
               identifier='area'
            />
            <PaymentItem
               type='Country'
               value={this.state.country}
               identifier='country'
            />
            <PaymentItem
               type='Card no.'
               value={this.state.card}
               identifier='card'
            />
         </View>
      )
   }
}
