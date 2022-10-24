import { getRandomHexColor } from "utils/getRandomColor";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
font-family: ${p => p.theme.fonts.body};
width: 300px;
margin: 0 auto;
margin-top: ${p => p.theme.space[4]}px;
margin-bottom: ${p => p.theme.space[4]}px;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
padding-right: ${p => p.theme.space[4]}px;
padding-left: ${p => p.theme.space[4]}px;
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.md};
&:hover {box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);}
`
const List = styled.ul`
list-style: none;
text-decoration: none;
display: flex;
justify-content: center;
margin: 0;
padding: 0;
`
const Caption = styled.h2`
display: flex;
justify-content: center;
font-size: ${p => p.theme.fontSizes.l};
`
const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
color: ${p => p.theme.colors.text};

&:hover {box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);}
`
const Label = styled.span`
display: flex;
font-size: ${p => p.theme.fontSizes.m};
`
const Span = styled.span`
display: flex;
font-size: ${p => p.theme.fontSizes.l};
`


export const Statistics = ({title, stats}) => {
    return (
        <Section className="statistics">
        {title && <Caption className={title}>Upload stats</Caption>}

        <List className="stat-list">
            {stats.map(({id, label, percentage}) => {
                return  <Item className="item" key = {id} style={{backgroundColor: getRandomHexColor()}}>
      <Label className="label">{label}</Label>
                    <Span className="percentage">{ percentage}%</Span>
    </Item>
            })}
   
  </List>
</Section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired 
    })).isRequired
}