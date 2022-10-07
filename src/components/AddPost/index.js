import { useState } from "react";
import axios from "axios";
import service from "../../api/service";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
 
const API_URL = `${process.env.REACT_APP_SERVER_URL}`;
 
function AddPost(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
 

  const handleFileUpload = (e) => {
 
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };


  const handleSubmit = (e) => {                        
    e.preventDefault();
 
    const requestBody = { name, description,imageUrl };
    axios
      .post(`${API_URL}/post`, requestBody)
      .then((response) => {
        setName("");
        setDescription("");
        setImageUrl("");
        
        props.refreshPost(); 
      })
      .catch((error) => console.log(error));
  };
 
 
  return (
    <div className="">
    
 
      <form onSubmit={handleSubmit}>  
       
        <Flex
      minH={'100vh'}
      mx={-100}
      align={'center'}
      justify={'center'}
      py={12}
     >
      <Stack
        boxShadow={'2xl'}
        w={'900px'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        p={10}
        
        align={'center'}>
        <img src="../images/addPost.png" className="AddPOst"></img>
        <Stack align={'center'} >
          <Heading
            textTransform={'uppercase'}
            fontSize={'3xl'}
            color={useColorModeValue('gray.800', 'gray.200')}>
           Add To Post
          </Heading>
         
        </Stack>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder={'Title Post'}
          onChange={(e) => setName(e.target.value)}
          color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
        />
 
          <Input
           type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={'What are you thinking about¿?'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
          />
          <input type="file" onChange={(e) => handleFileUpload(e)} />
          
          <Button type="submit"
          bg={'#000'}
           rounded={'full'}
            color={'white'}
            flex={'1 0 auto'}
            _hover={{ bg: '#E80002' }}
            _focus={{ bg: '#E80002' }}>Submit</Button>
        </Stack>
      </Stack>
    </Flex>
        
 
        
       
      </form>


      
    </div>
  );
}
 
const NotificationIcon = createIcon({
  displayName: 'Notification',
  viewBox: '0 0 128 128',
  path: (
    <g id="Notification">
      <rect
        className="cls-1"
        x="1"
        y="45"
        fill={'#fbcc88'}
        width="108"
        height="82"
      />
      <circle className="cls-2" fill={'#8cdd79'} cx="105" cy="86" r="22" />
      <rect
        className="cls-3"
        fill={'#f6b756'}
        x="1"
        y="122"
        width="108"
        height="5"
      />
      <path
        className="cls-4"
        fill={'#7ece67'}
        d="M105,108A22,22,0,0,1,83.09,84a22,22,0,0,0,43.82,0A22,22,0,0,1,105,108Z"
      />
      <path
        fill={'#f6b756'}
        className="cls-3"
        d="M109,107.63v4A22,22,0,0,1,83.09,88,22,22,0,0,0,109,107.63Z"
      />
      <path
        className="cls-5"
        fill={'#d6ac90'}
        d="M93,30l16,15L65.91,84.9a16,16,0,0,1-21.82,0L1,45,17,30Z"
      />
      <path
        className="cls-6"
        fill={'#cba07a'}
        d="M109,45,65.91,84.9a16,16,0,0,1-21.82,0L1,45l2.68-2.52c43.4,40.19,41.54,39.08,45.46,40.6A16,16,0,0,0,65.91,79.9l40.41-37.42Z"
      />
      <path
        className="cls-7"
        fill={'#dde1e8'}
        d="M93,1V59.82L65.91,84.9a16,16,0,0,1-16.77,3.18C45.42,86.64,47,87.6,17,59.82V1Z"
      />
      <path
        className="cls-8"
        fill={'#c7cdd8'}
        d="M74,56c-3.56-5.94-3-10.65-3-17.55a16.43,16.43,0,0,0-12.34-16,5,5,0,1,0-7.32,0A16,16,0,0,0,39,38c0,7.13.59,12-3,18a3,3,0,0,0,0,6H50.41a5,5,0,1,0,9.18,0H74a3,3,0,0,0,0-6ZM53.2,21.37a3,3,0,1,1,3.6,0,1,1,0,0,0-.42.7,11.48,11.48,0,0,0-2.77,0A1,1,0,0,0,53.2,21.37Z"
      />
      <path
        className="cls-3"
        fill={'#f6b756'}
        d="M46.09,86.73,3,127H1v-1c6-5.62-1.26,1.17,43.7-40.78A1,1,0,0,1,46.09,86.73Z"
      />
      <path
        className="cls-3"
        fill={'#f6b756'}
        d="M109,126v1h-2L63.91,86.73a1,1,0,0,1,1.39-1.49C111,127.85,103.11,120.51,109,126Z"
      />
      <path
        className="cls-8"
        fill={'#c7cdd8'}
        d="M93,54.81v5L65.91,84.9a16,16,0,0,1-16.77,3.18C45.42,86.64,47,87.6,17,59.82v-5L44.09,79.9a16,16,0,0,0,21.82,0Z"
      />
      <path
        className="cls-9"
        fill={'#fff'}
        d="M101,95c-.59,0-.08.34-8.72-8.3a1,1,0,0,1,1.44-1.44L101,92.56l15.28-15.28a1,1,0,0,1,1.44,1.44C100.21,96.23,101.6,95,101,95Z"
      />
      <path
        className="cls-3"
        fill={'#f6b756'}
        d="M56.8,18.38a3,3,0,1,0-3.6,0A1,1,0,0,1,52,20,5,5,0,1,1,58,20,1,1,0,0,1,56.8,18.38Z"
      />
      <path
        className="cls-1"
        fill={'#fbcc88'}
        d="M71,42.17V35.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,39,35c0,7.33.58,12-3,18H74A21.06,21.06,0,0,1,71,42.17Z"
      />
      <path
        className="cls-3"
        fill={'#f6b756'}
        d="M74,53H36a21.36,21.36,0,0,0,1.86-4H72.14A21.36,21.36,0,0,0,74,53Z"
      />
      <path className="cls-3" fill={'#f6b756'} d="M59.59,59a5,5,0,1,1-9.18,0" />
      <path
        className="cls-1"
        fill={'#fbcc88'}
        d="M74,59H36a3,3,0,0,1,0-6H74a3,3,0,0,1,0,6Z"
      />
    </g>
  ),
});
export default AddPost;