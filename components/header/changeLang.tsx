import Image from "next/image"

import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"

import uz from '@/assets/uzb.png'
import en from '@/assets/eng.png'
import ru from '@/assets/ru.png'
import { useRouter } from "next/router"
import Link from "next/link"

export default function ChangeLang() {
  const { locale, route } = useRouter()
  const currentLang = langs.find(l => l.val === locale)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image src={currentLang?.img || ''} alt={currentLang?.name || ''} className="cursor-pointer object-contain !w-12 h-max" />
      </DropdownMenuTrigger>
      <DropdownMenuContent >
        <DropdownMenuGroup>
          {langs.map(l => (
            <DropdownMenuItem key={l.val} asChild>
              <Link href={route} locale={l.val}>
                <Image src={l.img} width={20} height={20} alt={l.name} placeholder="blur" />
                <span className="ml-2">{l.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}



const langs = [
  {
    name: "O'zbek",
    val: "uz",
    img: uz
  },
  {
    name: "English",
    val: "en",
    img: en
  },
  {
    name: "Русский",
    val: "ru",
    img: ru
  }
]