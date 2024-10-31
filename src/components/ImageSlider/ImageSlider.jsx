import { useState } from 'react';
import styles from './ImageSlider.module.css';
import { Button, Flex } from '@radix-ui/themes';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import PropTypes from 'prop-types';

export const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Flex direction='column' align='center'>
      <img
        className={styles.productimage}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <Flex>
        <Button
          className={styles.leftbtn}
          radius='full'
          variant='outline'
          onClick={prevSlide}
        >
          <ChevronLeftIcon className={styles.lefticon} />
        </Button>
        <Button
          className={styles.rightbtn}
          radius='full'
          variant='outline'
          onClick={nextSlide}
        >
          <ChevronRightIcon className={styles.righticon} />
        </Button>
      </Flex>
    </Flex>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array,
};
