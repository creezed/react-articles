import { Avatar, Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { ArticleImgBlockComponent } from '@/entities/article/ui/article-img-block-component/ArticleImgBlockComponent';
import { ArticleTextBlockComponent } from '@/entities/article/ui/article-text-block-component/ArticleTextBlockComponent';
import {
  ArticleBlock,
  ArticleBlockType,
} from '@/shared/models/article/article-block.enum';
import { Article } from '@/shared/models/article/Article.model';

const data: Article = {
  id: '18',
  title: 'Как составить резюме IT-специалисту, которое точно запомнится',
  subtitle:
    'Резюме помогает составить первое впечатление тем, кто нанимает вас как специалиста. Рекрутеры и HR просматривают сотни анкет, поэтому хорошее резюме — залог того, что кандидата заметят и предложат работу.',
  img: 'https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg',
  likes: 1022,
  dislikes: 1200,
  createdAt: '26.02.2022',
  userId: '1',
  type: 'math',
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок блока текста',
      paragraphs: [
        'Резюме помогает составить первое впечатление тем, кто нанимает вас как специалиста. Рекрутеры и HR просматривают сотни анкет, поэтому хорошее резюме — залог того, что кандидата заметят и предложат работу.',
        'Резюме помогает составить первое впечатление тем, кто нанимает вас как специалиста. Рекрутеры и HR просматривают сотни анкет, поэтому хорошее резюме — залог того, что кандидата заметят и предложат работу.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      title: 'Заголовок этого Картинки',
      src: 'https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg',
    },
  ],
};

export const ArticleDetail = () => {
  const renderBlock = (block: ArticleBlock) => {
    switch (block?.type) {
      case ArticleBlockType.IMAGE:
        return (
          <Box px="36px">
            <ArticleImgBlockComponent key={block.id} block={block} />
          </Box>
        );
      case ArticleBlockType.TEXT:
        return (
          <Box px="36px" py="12px">
            <ArticleTextBlockComponent key={block.id} block={block} />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Flex px="36px" pt="32px" gap={4} alignItems="center" mb="18px">
        <Avatar name="Dan Abrahmov" />
        <Text fontWeight={500}>Dan Abrahmov</Text>
      </Flex>
      <Box px="36px" mb="24px">
        <Heading
          as="h3"
          color="blackAlpha.900"
          fontWeight={500}
          fontSize="48px"
          mb="8px"
        >
          {data.title}
        </Heading>
        <Text fontSize="20px" as="p">
          {data.subtitle}
        </Text>
      </Box>

      <Image
        objectFit="cover"
        objectPosition="center"
        w="full"
        h="400px"
        borderRadius="8px"
        overflow="hidden"
        pb="32px"
        src={data.img}
      />

      {data?.blocks?.map(renderBlock)}
    </>
  );
};
