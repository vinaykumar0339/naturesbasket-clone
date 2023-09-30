"use client"
import ImageCard from '@/components/common/ImageCard'
import { cn } from '@/lib/utils'
import { Carousel } from '@trendyol-js/react-carousel'
import { Square, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

const slides = [
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/f568e964-c4f3-46fe-91f5-a18d11e8e0ad_1320x376.jpg")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/b815a21d-517a-4aca-adae-b794b1655347_1320x376.jpg")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/39e74482-be18-472f-87ff-056e0d73e1d5_1320x376.jpg")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/3f69b0bc-1d78-47f5-a43a-f35e6c86e0f0_1320x376.jpg")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/6d69a2af-562b-40db-9b00-2c51195747c2_1320x376.jpg")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/f0dd0bf7-0c9d-4876-8e87-cac05014e4d3_1320x376.jpg")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/cd952378-6104-4241-8469-a7b43c18687c_1320x376.jpg")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/fb7b659d-7a27-4a7b-b315-eda760088bb3_1320x376.jpg")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/aef74fd5-15f2-4562-9d89-086fb1501916_1320x376.png")]',
  'bg-[url("https://d1z88p83zuviay.cloudfront.net/BannerImages/12368417-4251-4579-9aee-0f50c0549294_1320x376.jpg")]',
]

const shopByCategoryCardItems = [
  {
    title: 'Exotic Fruits',
    imageUrl: '/shopByCategory/Exotic_Fruits.png'
  },
  {
    title: 'Meat, Poultry & Seafood',
    imageUrl: '/shopByCategory/Meats_Poultry_Seafood.png'
  },
  {
    title: 'Dairy',
    imageUrl: '/shopByCategory/Bakery_Dairy.png'
  },
  {
    title: 'Artisanal Breads',
    imageUrl: '/shopByCategory/Fresh_Artisanal_Breads.png'
  },
  {
    title: 'Chocolates, Confectionery',
    imageUrl: '/shopByCategory/Chocolates_Confectionery.png'
  },
  {
    title: 'Delicatessen & Cheese',
    imageUrl: '/shopByCategory/Delicatessen_Cheese.png'
  },
  {
    title: 'The Gift Studio',
    imageUrl: '/shopByCategory/The_Gift_Studio.png'
  },
  {
    title: 'Breakfast, Jams, Honey & Spreads',
    imageUrl: '/shopByCategory/Breakfast_Jams_Honey_Spreads.png'
  },
  {
    title: 'Health & Wellness',
    imageUrl: '/shopByCategory/Health_Wellness.png'
  },
  {
    title: 'Grocery',
    imageUrl: '/shopByCategory/Grocery.png'
  },
  {
    title: 'Beverages',
    imageUrl: '/shopByCategory/Beverages.png'
  },
  {
    title: 'World Foods',
    imageUrl: '/shopByCategory/World_Foods.png'
  }
]

const whatsCooking = [
  {
    title: 'Gluten-Free Fusilli Aglio Olio',
    imageUrl: '/whatsCooking/WhatsCooking-1.jpg',
  },
  {
    title: 'Chinese Red Rice',
    imageUrl: '/whatsCooking/WhatsCooking-2.jpg',
  },
  {
    title: 'Blueberry Banana smoothie with Chia Seeds',
    imageUrl: '/whatsCooking/WhatsCooking-3.jpg',
  },
  {
    title: 'Quinoa Salad',
    imageUrl: '/whatsCooking/WhatsCooking-4.jpg',
  },
  {
    title: 'Spiced Hot Chocolate (ChrisMUSTs Edition)',
    imageUrl: '/whatsCooking/WhatsCooking-5.jpg',
  },
  {
    title: 'BLT Sandwich (ChrisMUSTs Edition)',
    imageUrl: '/whatsCooking/WhatsCooking-6.jpg',
  },
  {
    title: 'Strawberry Chia Seed Pudding (ChrisMUSTs Edition)',
    imageUrl: '/whatsCooking/WhatsCooking-7.jpg',
  },
  {
    title: 'Protien Breakfast Bar',
    imageUrl: '/whatsCooking/WhatsCooking-8.jpg',
  },
  {
    title: 'Zucchini Pestro Zoodles',
    imageUrl: '/whatsCooking/WhatsCooking-9.jpg',
  },
  {
    title: 'Avocado Chocolate Mousse',
    imageUrl: '/whatsCooking/WhatsCooking-10.jpg',
  },
  {
    title: 'WorldFoodFest',
    imageUrl: '/whatsCooking/WhatsCooking-11.jpg',
  },
]

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-10">

      <div className='relative w-[90%] rounded-xl h-[22rem]'>
        <ResponsiveCarousel
          selectedItem={currentSlideIndex}
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          onChange={(index) => {
            setCurrentSlideIndex(index);
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={
              cn(
                'h-[22rem] rounded-xl w-full bg-no-repeat',
                slide,
              )
            } />
          ))}
        </ResponsiveCarousel>
        <div className='absolute left-2 bottom-2 flex'>
          {slides.map((_, index) => (
            <Square
              className='hover:cursor-pointer' 
              key={index} 
              size={20}
              onClick={() => {
                setCurrentSlideIndex(index);
              }}
              color={`${currentSlideIndex === index ? '#e5e5e5': 'white'}`} 
              fill={`${currentSlideIndex === index ? '#e5e5e5': 'white'}`} />
          ))}
        </div>
      </div>

      <br />
      <br />

      <div className='grid grid-cols-3 w-[90%] gap-7'>
        <div className={
              'h-48 w-full relative rounded-xl'
          }>
            <Image
                src={'/dashBoardImages/NaturesBasketGifting.jpeg'}
                alt={'NaturesBasketGifting'}
                fill
                className='object-contain rounded-xl'
            />
        </div>
        <div className={
              'h-48 w-full relative rounded-xl'
          }>
            <Image
                src={'/dashBoardImages/Defence-colony_BannerNew.jpg'}
                alt={'Defence-colony_BannerNew'}
                fill
                className='object-contain rounded-xl'
            />
        </div>
        <div className={
              'h-48 w-full relative rounded-xl'
          }>
            <Image
                src={'/dashBoardImages/Fruits-VegetablesNew.jpg'}
                alt={'Fruits-VegetablesNew'}
                fill
                className='object-contain rounded-xl'
            />
        </div>
      </div>

      {/* 3 line breaks */}
      <br />
      <br />
      <br />

     {/* shop by category */}
     <div className='flex flex-col justify-center items-center space-y-3'>
      <div className='flex justify-center items-center space-x-2'>
        <div className='w-96 h-0.5 bg-[#aaa2a2]' />
        <p className='text-xl uppercase'>Shop By Category</p>
        <div className='w-96 h-0.5 bg-[#aaa2a2]' />
      </div>
      <div className='flex flex-wrap justify-center items-center gap-3 px-26'>
        {shopByCategoryCardItems.map(shopByCategoryCardItem => (
          <ImageCard key={shopByCategoryCardItem.title} {...shopByCategoryCardItem} />
        ))}
      </div>
     </div>
     
     {/* 3 line breaks */}
     <br />
     <br />
     <br />

     {/* whats cooking */}
     <div className='flex w-[95%] flex-col justify-center items-center space-y-3'>
      <div className='flex justify-center items-center space-x-2'>
        <div className='w-96 h-0.5 bg-[#aaa2a2]' />
        <p className='text-xl uppercase'>What&#39;s Cooking</p>
        <div className='w-96 h-0.5 bg-[#aaa2a2]' />
      </div>
      <Carousel 
        className='flex justify-center items-center' 
        rightArrow={<ChevronRight color='#aaa2a2' size={50} />} 
        leftArrow={<ChevronLeft color='#aaa2a2' size={50} />} 
        show={4} 
        slide={3} 
      >
        {whatsCooking.map(cooking => (
          <ImageCard imageContainer={'h-52 w-52'} titleStyles={'text-[#880033]'} key={cooking.title} {...cooking} />
        ))}
      </Carousel>
     </div>
    </main>
  )
}
