const db = require('./dbconfig')
const cloudinary = require('./cloudinaryConfig')

const categories = [
  {
    Title: 'Technology',
    Description: 'Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.',
    secure_url: 'https://res.cloudinary.com/dbuut0gfp/image/upload/v1699004708/HR-GR8-technology-1030x674_ggfbum.jpg',
    public_id: 'Technology',
  },
  {
    Title: 'Nature',
    Description: 'Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general.',
    secure_url: 'https://res.cloudinary.com/dbuut0gfp/image/upload/v1699004709/nature-1686808887_irmcox.jpg',
    public_id: 'Nature',
  },
  {
    Title: 'Travel',
    Description: 'Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.',
    secure_url: 'https://res.cloudinary.com/dbuut0gfp/image/upload/v1699004708/leave-travel-allowance_hgfvmn.webp',
    public_id: 'Travel',
  },
  {
    Title: 'Food',
    Description: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
    secure_url: 'https://res.cloudinary.com/dbuut0gfp/image/upload/v1699004708/5e9a62cd-37c3-4f12-ac08-4d4e0a71fafa_dienpc.jpg',
    public_id: 'Food',
  },
  {
    Title: 'Sports',
    Description: 'Sport includes all forms of competitive physical activity or games which, through casual or organized participation, at least in part aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators.',
    secure_url: 'https://res.cloudinary.com/dbuut0gfp/image/upload/v1699004708/Sport_balls_zlvw1t.svg',
    public_id: 'Sports',
  },
  {
    Title: 'Review',
    Description: 'Review is an evaluation of a publication, service, or company such as a movie, video game, musical composition, book; a piece of hardware like a car, home appliance, or computer; or an event or performance, such as a live music concert, play, musical theater show, dance show, or art exhibition.',
    secure_url: 'https://res.cloudinary.com/dbuut0gfp/image/upload/v1699004708/Icon_peer_review-1170x1170_tmer3u.webp',
    public_id: 'Review',
  },
]

const addOriginalCategories = async () => {
  console.log('object')
  try {
    const allCategories = await db.cat.findAll({ where: {} })
    if (allCategories.length === 0) {
      for (let category of categories) {
        const cat = await db.cat.create({
          Title: category.Title,
          Description: category.Description,
          imageurl: category.secure_url,
          cloudid: category.public_id,
        })
        if (!cat) {
          console.log('error')
        }
      }
      console.log('categories added successfully')
    } else {
      console.log('Categories already exist')
    }
  } catch (e) {
    console.log(e)
  }
}

addOriginalCategories()
