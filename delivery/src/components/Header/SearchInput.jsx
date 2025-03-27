'use client'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

export function SearchInput() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')
  const [searchParams, setSearchParams] = useState('')

  useEffect(() => {
    setSearchParams(new URLSearchParams(window.location.search).get('search') || '')
  }, [])

  useEffect(() => {
    setSearchInput(searchParams)
  }, [searchParams])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchInput(value)

    const timeout = setTimeout(() => {
      if (value.trim()) {
        router.push(`/?search=${encodeURIComponent(value)}`)
      } else {
        router.push('/')
      }
    }, 300)

    return () => clearTimeout(timeout)
  }

  return (
    <Suspense fallback={<div className="w-[80vw] h-10 bg-gray-200 animate-pulse rounded-full"></div>}>
      <div className="sm:pr-10 flex flex-row-reverse items-center w-[80vw] sm:w-xl md:w-2xl xl:w-3xl xl:pr-0 
      lg:w-2xl">
        <Input
          onChange={handleSearch}
          value={searchInput}
          type="search"
          placeholder="Search"
          className="rounded-full w-full placeholder:ml-10 placeholder:w-full pl-12"
        />
        <span className="relative left-10">
          <Search color="gray" width={18} />
        </span>
      </div>
    </Suspense>
  )
}
