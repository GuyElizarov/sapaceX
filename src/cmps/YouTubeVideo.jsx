import { AspectRatio, Box } from '@chakra-ui/react';

export const YouTubeVideo = ({ youtubeId }) => {
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`;

    return (
        <Box w='full'>
            
            <AspectRatio ratio={16 / 9}>
                <iframe
                    title="YouTube Video"
                    src={youtubeEmbedUrl}
                    allowFullScreen
                />
            </AspectRatio>
        </Box>
    );
}

