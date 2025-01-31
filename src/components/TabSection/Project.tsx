import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Project = () => {
    return (
        <Grid container spacing={3}>
            {[1, 2, 3].map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`https://source.unsplash.com/random/350x200?${project}`}
                            alt={`Project ${project}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                Project Title {project}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Project description goes here...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Project;