import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

//    const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    console.log( loading );

//    useEffect( () => {
//        getGifs( category )
////            .then( imgs => setImages( imgs ) ) //o lo que es lo mismo
//            .then( setImages );
//    }, [ category ]
//    )

    /*
    const getGifs = async() => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=5Yu7DywX9jUnxXTvGQ7CApB99ywdBo5E`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        } );

        console.log(gifs);
        setImages(gifs);
    };
    */

    return (
 /*   <>
        <h3> { category } </h3>
        <ol>
            {
                images.map( ( img ) => (
                    <li key ={ img.id }> { img.title } </li>
                ))
            }
        </ol>
    </>
*/
    <>
        <h3 className="animate__animated animate__fadeIn animate__slower"> { category } </h3>

        { loading && <p className="animate__animated animate__flash">Loading</p> }

        <div className="card-grid animate__animated animate__fadeIn animate__slower">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                        />
                    ))
                }
            </div>
    </>
    )
}
