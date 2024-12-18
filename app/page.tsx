
import axios from 'axios'
import { Button } from '@/components/ui/button';
import  { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
interface Recipe{
  title:string;
  image:string;
  time:number;
  description:string;
  vegan:boolean;
  id:string;
}
const getRecipies= async():Promise<Recipe[]>=>{
  const res=await axios({
    method:'get',
    url:"http://localhost:4000/recipes"
  })
  // await new Promise((resolve)=>setTimeout(resolve,3000));
    return res.data
  }


export default async function Home() {
  const recipes=await getRecipies();
  return (
    <div className="grid grid-cols-3 gap-8  p-12">
      {
        recipes.map((recipe:Recipe)=>{

          return(
            <Card key={recipe.id} className='flex flex-col justify-between'>
              <CardHeader className='flex-row gap-4 items-center' >
                <div className='flex flex-col gap-1'>
                  <Avatar >
                    <AvatarImage alt='recipe img' src={`/img/${recipe.image}`} />
                    <AvatarFallback>{(recipe.title).slice(0,2 )}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{recipe.title}</CardTitle> 
                  <CardDescription>{recipe.time}mins to cook.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{recipe.description}</p>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button >view recipe</Button>
                 {recipe.vegan &&  <Badge variant={'secondary'}>Vegan!</Badge>}
              </CardFooter  >
            </Card>
          )
        })
      }

    </div>
  );
}
