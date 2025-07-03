import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import './Fourth.css'

const Fourth = () => {
    let [theme,setTheme]=useState(true)
    // True means light 
    // false means dark
  return (
    <div style={(theme)?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}}>
      <div className="navbar">
        <h1>Logo</h1>
        <div className="icon">
        {(theme)?
        <FaMoon onClick={()=>{setTheme(!theme)}} className='size'/> :
        <FaSun onClick={()=>{setTheme(!theme)}} style={{color:"yellow"}} className='size'/>
}
        </div>
      </div>
      <div className="content">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a voluptatum tempora distinctio tenetur nostrum, possimus minima excepturi accusamus nesciunt ab molestias corporis pariatur eum nisi quis doloribus? Ex eaque modi culpa omnis. Nobis, sapiente! Omnis ipsam sequi, debitis assumenda unde eius perspiciatis itaque veniam eos similique, enim reprehenderit architecto! Sed minus nobis tempora? Animi ipsam dolorum maxime recusandae, provident officia delectus architecto possimus, facilis sed neque deserunt optio voluptatibus soluta quis quisquam nam distinctio? Aliquam quam deserunt iure! Corrupti molestiae voluptatum laborum provident officiis. At iste aliquam, dignissimos beatae a possimus quasi fuga consectetur mollitia! Amet vero veritatis corrupti!
        </p>
      </div>
    </div>
  )
}

export default Fourth
