import { useState } from 'react'

import { Category, CategoryChild } from '@/hooks/use-category'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SmallCards from '../cards/small-cards'

export const CategoryTabs = ({ categories }: { categories: Category[] }) => {
  return (
    <Tabs defaultValue="#all">
      <TabsList className="w-full h-fit overflow-auto bg-transparent border border-input rounded-full justify-start my-scrollable-div">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.anchor}>
            {category.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((c) => (
        <TabsContent key={c.id} value={c.anchor}>
          {
            <SmallCards
              key={c.id}
              id={c.anchor.slice(1)}
              title={c.title}
              cards={c.children}
              hasMore={false}
            />
          }
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default CategoryTabs
