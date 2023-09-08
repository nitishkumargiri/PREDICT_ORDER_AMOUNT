import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "./components/Table";
import Button from "@material-ui/core/Button";
import AddData from "./components/AddData";
import AnalyticsView from "./components/AnalyticsView";
import AdvancedSearch from "./components/AdvancedSearch";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  //   const [searchQuery, setSearchQuery] = React.useState('');
  // const [searchResults, setSearchResults] = React.useState([]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#666666",
  },
  button: {
    height: "75%",
    marginTop: "5px",
    marginBottom: "5px",
    marginRight: "5px",
    backgroundColor: "#8fd163",
  },
  searchBoxContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
  searchTxt: {
    marginRight: theme.spacing(1),
    width: "200%",
    height: "55%",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <style>
        {`
        .MuiTabs-flexContainer {
          background-color: #666666;
        }
        .PrivateTabIndicator-colorSecondary-7 {
          background-color: white;
        }
        .MuiButton-contained {
            background-color: #8fd163;
        }
        `}
      </style>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="HOME PAGE" {...a11yProps(0)} />
          <Tab label="ADD DATA" {...a11yProps(1)} />
          <Tab label="ANALYTICS VIEW" {...a11yProps(2)} />
          <div className={classes.searchBoxContainer}>
            <input
              className={classes.searchTxt}
              type="text"
              name=""
              id="search-inv"
              placeholder="Search Customer Id"
            />
            <a className="search-btn" href="#"></a>
          </div>
          <Button
            variant="filled"
            backgroundColor="#8fd163"
            className={classes.button}
            oonClick={(e) => {
              <AdvancedSearch />;
            }}
          >
            Advanced<br></br>Search
          </Button>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Table />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddData />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AnalyticsView />
      </TabPanel>
    </div>
  );
}
