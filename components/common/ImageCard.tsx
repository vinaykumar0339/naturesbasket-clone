import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx';
import Image from 'next/image'
import React from 'react'

type ShopByCategoryCardProps = {
    title: string;
    imageUrl: string;
    imageContainer?: ClassValue;
    titleStyles?: ClassValue;
}

function ImageCard({
    title,
    imageUrl,
    imageContainer,
    titleStyles,
}: ShopByCategoryCardProps) {
  return (
    <div className='flex hover:cursor-pointer flex-col justify-center items-center space-y-2 w-52'>
        <div className={
            cn('h-48 w-48 relative', imageContainer)
        }>
            <Image 
                src={imageUrl}
                alt={title}
                fill
                className='object-contain'
            />
        </div>
        <p className={cn(
            'text-[#aaa2a2]',
            titleStyles
        )}>{title}</p>
    </div>
  )
}

export default ImageCard