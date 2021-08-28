import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Slider,
  Card,
  CardContent,
  Button,
  CardActions,
  Grid,
} from "@material-ui/core";
export default function Home() {
  const [value, setValue] = useState(0);
  const [cards, setCards] = useState([1, 2, 3, 4, 5, 7, 8, 9, 6]);
  const changeTab = (a, b) => {
    setValue(b);
  };
  return (
    <div>
      <Container fixed>
        <div>
          <h1>home page</h1>
          <Paper>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              centered
              value={value}
              onChange={changeTab}
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Paper>
          <Slider
            defaultValue={30}
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </div>
        <Grid container spacing={3}>
          {cards.map((c) => {
            return (
              <Grid xs={4}>
                <Card style={{margin:"20px"}}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                      belent
                    </Typography>
                    <Typography color="textSecondary">adjective</Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        
      </Container>
    </div>
  );
}
