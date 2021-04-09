import { RedirectLogIn } from './Redirects'
import { useState } from 'react'

export const Photo = () => {
  return <img></img>
}

export const Likes = ({count}) => {
  return <p>{count} Likes</p>
}

export const LikeButton = () => {
  return <div> </div>
}

class Comment {
  constructor(user, message, comments){
    this.user = user
    this.message = message
    this.comments = comments || []
  }
}



const ImgProfile = ({link}) => {
  return <img className='img-profile' src={link}/>
}

const HeadBoxOfPhoto = ({iconLink, user}) => {
  return(
    <div className='box-of-photo__head'>
      <div className='box-of-photo__head__left'>
          <ImgProfile link={iconLink}/>
          <p className='box-of-photo__head__left__name'>{user}</p>
      </div>
    </div>
  )
}



const BodyBoxOfPhoto = ({link}) => {
  return(
    <img className='box-of-photo__photo' src={link}/>
  )
}


export const BoxOfPhoto = () => {
  const init = {
    user: 'Mateo',
    likes: 4000,
    description: 'Hi guys, nice weather today.',
    img: '/playa.jpg',
    comments: [
/*
      {
        user: 'Joe',
        text: 'Wow, where are you?',
        comments: [
          {
            user: 'Mateo',
            text: `I'm in the non-existent mountains of Villa Gesell.`,
            comments: [
              {
                user: 'Joe',
                text: 'Haha so funny',
                comments: []
              }
            ]
          }
        ]
      }
*/
    ]
  }

  const [data, setData] = useState(init)

  const { user, img } = data


  return (
    <div className='box-of-photo'>

      <HeadBoxOfPhoto iconLink={img} user={user}/>
      <BodyBoxOfPhoto link={img}/>
    </div>
  )
}



export const Home = () => {
  return(
    <RedirectLogIn>
      <BoxOfPhoto/>
    </RedirectLogIn>
  )
}
