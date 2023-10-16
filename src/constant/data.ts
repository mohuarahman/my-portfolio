export const navlink = [
{titel : 'home',
  link : '/'},
{titel : 'services',
  link : '/services'},
{titel : 'protfolio',
  link : '/protfolio'},
{titel : 'blog',
  link : '/blog'},
{titel : 'resume',
  link : '/resume.pdf',
  target : '_blank'},
{titel : 'contact',
  link : '/contact'}]
  


// footer section
export const footersupert = [
  {titel : 'web desgine'},
  {titel : 'web devlopment'},
  {titel : 'protfolio'},
  {titel : 'blog'},
  {titel : 'resume'},
  {titel : 'contact'}]
    
  

// services array section
// import icon
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { SiWebstorm, SiGooglemybusiness} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { GoCodespaces } from "react-icons/go";

export const services =[
{id:1, titel:'Web Design',icon: BsFileEarmarkCodeFill, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid odio sequi soluta? Laboriosam ducimus quidem aut eius saepe. Eaque earum impedit ullam quibusdam reiciendis itaque minima ipsum. Animi vitae quae.'},
{id:2, titel:'Web Development',icon: SiWebstorm, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid odio sequi soluta? Laboriosam ducimus quidem aut eius saepe. Eaque earum impedit ullam quibusdam reiciendis itaque minima ipsum. Animi vitae quae.'},
{id:3, titel:'Mern Stack Development',icon: FaReact, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid odio sequi soluta? Laboriosam ducimus quidem aut eius saepe. Eaque earum impedit ullam quibusdam reiciendis itaque minima ipsum. Animi vitae quae.'},
{id:4, titel:'Creating Articles',icon: TfiWrite, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid odio sequi soluta? Laboriosam ducimus quidem aut eius saepe. Eaque earum impedit ullam quibusdam reiciendis itaque minima ipsum. Animi vitae quae.'},
{id:5, titel:'UI Desgine',icon: GoCodespaces, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid odio sequi soluta? Laboriosam ducimus quidem aut eius saepe. Eaque earum impedit ullam quibusdam reiciendis itaque minima ipsum. Animi vitae quae.'},
{id:6, titel:'E-commerce Project',icon: SiGooglemybusiness, description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid odio sequi soluta? Laboriosam ducimus quidem aut eius saepe. Eaque earum impedit ullam quibusdam reiciendis itaque minima ipsum. Animi vitae quae.'},
]


// protfolio array section
import protfolioImage1 from '@/img/protfolioImage1.png'
import protfolioImage2 from '@/img/protfolioimage2.png'
import protfolioImage3 from '@/img/protfolioimage3.png'
import protfolioImage4 from '@/img/protfolioimage4.png'
import protfolioImage5 from '@/img/protfolioimage5.png'
import protfolioImage6 from '@/img/protfolioimage6.png'
export const protfolio = [
  {
    id : 1,
    img : protfolioImage1,
    name : 'protfolio project',
    language : 'Typescript'
  },
  {
    id : 2,
    img : protfolioImage2,
    name : 'protfolio project',
    language : 'Typescript'
  },
  {
    id : 3,
    img : protfolioImage3,
    name : 'protfolio project',
    language : 'Typescript'
  },
  {
    id : 4,
    img : protfolioImage4,
    name : 'protfolio project',
    language : 'Typescript'
  },
  {
    id : 5,
    img : protfolioImage5,
    name : 'protfolio project',
    language : 'php, larable'
  },
  {
    id : 6,
    img : protfolioImage6,
    name : 'protfolio project',
    language : 'react, node'
  },
]