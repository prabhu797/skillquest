import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const SidebarContainer = styled(Box)(({ theme }) => ({
    width: 250,
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
}));

const Logo = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const Sidebar = () => {
    const theme = useTheme();

    return (
        <SidebarContainer>
            <Logo>SkillQuest</Logo>
            <List>
                <StyledLink to="/home">
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </StyledLink>
                <StyledLink to="/tests">
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tests" />
                    </ListItem>
                </StyledLink>
                <StyledLink to="/results">
                    <ListItem button>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Results" />
                    </ListItem>
                </StyledLink>
                {/* You can add more options here */}
            </List>
        </SidebarContainer>
    );
};

export default Sidebar;
