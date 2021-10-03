import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React, { FC, ReactElement } from "react";

const About: FC<{}> = (): ReactElement => {
  return (
    <Container maxWidth="md">
      <Card>
        <CardHeader title="SchoolBirds" />
        <CardContent>
          <Grid item xs={12}>
            <strong>
              Start your next react + Type-script + Redux-toolkit + Material-Ui
              project in seconds
            </strong>
          </Grid>
          
          <Grid item xs={12}>
            {/* ABOUT THE PROJECT */}
            <div id="about-the-project">
            
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- GETTING STARTED --> */}
            <div>
            
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- USAGE EXAMPLES --> */}
            <div>## Usage</div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- ROADMAP --> */}
            <div>
              ## Roadmap See the [open
              issues](https://github.com/RajeevSingh273/SchoolBirds/issues) for
              a list of proposed features (and known issues).
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- CONTRIBUTING --> */}
            <div>
              ## Contributing Contributions are what make the open source
              community such an amazing place to be learn, inspire, and create.
              Any contributions you make are **greatly appreciated**. 1. Fork
              the Project 2. Create your Feature Branch (`git checkout -b
              feature/AmazingFeature`) 3. Commit your Changes (`git commit -m
              'Add some AmazingFeature'`) 4. Push to the Branch (`git push
              origin feature/AmazingFeature`) 5. Open a Pull Request
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- LICENSE --> */}
            <div>
              ## License Distributed under the MIT License. See `LICENSE` for
              more information.
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- CONTACT --> */}
            <div>
              ## Contact Rajeev kumar Singh -
              [@rajeevsingh273](https://twitter.com/rajeevsingh273) -
              rajeevsingh273@gmail.com Project Link:
              [https://github.com/RajeevSingh273/SchoolBirds](https://github.com/RajeevSingh273/SchoolBirds)
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- ACKNOWLEDGEMENTS --> */}
            <div id="acknowledgements">
              ## Acknowledgements * [GitHub Emoji Cheat
              Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet) *
              [Choose an Open Source License](https://choosealicense.com) *
              [Font Awesome](https://fontawesome.com)
            </div>
          </Grid>
          <Grid item xs={12}></Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
