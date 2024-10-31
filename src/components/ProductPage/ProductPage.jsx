import {
  CDN_URL_BLACK,
  CDN_URL_DEEP_NAVY,
  CDN_URL_WHITE,
} from '../../utils/constants';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import styles from './ProductPage.module.css';
import { Heading, Text, Select, Button, Flex } from '@radix-ui/themes';

export const ProductPage = () => {
  const imageList = [CDN_URL_WHITE, CDN_URL_BLACK, CDN_URL_DEEP_NAVY];

  return (
    <div className={styles.contentwrapper}>
      <div className={styles.container}>
        <ImageSlider images={imageList} />
        <div className={styles.rightside}>
          <Heading className={styles.productname} as='h1'>
            Men&apos;s Wool Runner Go
          </Heading>
          <Text className={styles.productdescription} as='p' mt='5'>
            Driven by your feedback, the next generation Wool Runner Go delivers
            on a refined execution without sacrificing its best-in-class
            comfort.
          </Text>
          <Flex mt='5' direction='column' gap='1'>
            <Text className={styles.colortext} as='label' size='2'>
              Color:
            </Text>
            <Select.Root size='3' defaultValue='white'>
              <Select.Trigger className={styles.colorselect} />
              <Select.Content className={styles.colorselectcontent}>
                <Select.Item className={styles.coloritem} value='white'>
                  White
                </Select.Item>
                <Select.Item className={styles.coloritem} value='black'>
                  Black
                </Select.Item>
                <Select.Item className={styles.coloritem} value='deepnavy'>
                  Deep Navy
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <Button
            className={styles.btn}
            radius='none'
            color='black'
            variant='solid'
            mt='5'
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
