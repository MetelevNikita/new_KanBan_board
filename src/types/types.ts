export type CardType = {
    id: number
    author: string;
    title: string;
    description: string;
    status: string;
    deadline: string
    dateCreated: string
    dateUpdated: string
}



export type UserType = {
  id: number
  name: string
  login: string
  email: string
  password: string
  profile: {
    img: string
    age: number
    about: string
    profession: string
  }
  createAt: string

}





