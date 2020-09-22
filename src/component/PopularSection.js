import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import PopularCard from './PopularCard'

const PopularSection = (props) => {
  let data = [
    {
      "publisher": "Closet Cooking",
      "title": "Taco Quesadilla Pizzas",
      "source_url": "http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html",
      "recipe_id": "35626",
      "image_url": "http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg",
      "social_rank": 99.99999998319973,
      "publisher_url": "http://closetcooking.com"
    },
    {
      "publisher": "Closet Cooking",
      "title": "Avocado Breakfast Pizza with Fried Egg",
      "source_url": "http://www.closetcooking.com/2012/07/avocado-breakfast-pizza-with-fried-egg.html",
      "recipe_id": "35097",
      "image_url": "http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg",
      "social_rank": 99.99999990783806,
      "publisher_url": "http://closetcooking.com"
  },
  {
      "publisher": "The Pioneer Woman",
      "title": "Pepperoni Pizza Burgers",
      "source_url": "http://thepioneerwoman.com/cooking/2012/10/pepperoni-pizza-burgers/",
      "recipe_id": "46895",
      "image_url": "http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg",
      "social_rank": 99.99999990525365,
      "publisher_url": "http://thepioneerwoman.com"
  },
  {
    "publisher": "Real Simple",
    "title": "English-Muffin Egg Pizzas",
    "source_url": "http://www.realsimple.com/food-recipes/browse-all-recipes/english-muffin-egg-pizzas-10000000663044/index.html",
    "recipe_id": "38812",
    "image_url": "http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg",
    "social_rank": 99.99999978548222,
    "publisher_url": "http://realsimple.com"
},
{
    "publisher": "My Baking Addiction",
    "title": "Simple No Knead Pizza Dough",
    "source_url": "http://www.mybakingaddiction.com/no-knead-pizza-dough-recipe/",
    "recipe_id": "dd21dd",
    "image_url": "http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg",
    "social_rank": 99.9999995838859,
    "publisher_url": "http://www.mybakingaddiction.com"
}
  ]
  return (
    <View style={styles.popular}>
      <Text style={styles.heading}>POPULAR  THIS  WEEK</Text>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map(item => <PopularCard key={item.recipe_id} item={item}/>)}
      </ScrollView> */}
      <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
      <Carousel
        layout="default"
        data={data}
        renderItem={({item, index})=><PopularCard key={item.recipe_id} item={item} {...props}/>}
        sliderWidth={250}
        itemWidth={230}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  popular: {
    flex: 1,
    height: 200,
    marginVertical: 20,
    marginLeft: 20
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    paddingBottom: 2,
    fontFamily: 'Bodoni 72',
  }
})

export default PopularSection