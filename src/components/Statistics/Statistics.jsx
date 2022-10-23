import { getRandomHexColor } from "utils/getRandomColor";
import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return (<section className="statistics">
        {title && <h2 className={title}>Upload stats</h2>}

        <ul className="stat-list">
            {stats.map(({id, label, percentage}) => {
                return  <li className="item" key = {id} style={{backgroundColor: getRandomHexColor()}}>
      <span className="label">{label}</span>
                    <span className="percentage">{ percentage}%</span>
    </li>
            })}
   
  </ul>
</section>)
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired 
    })).isRequired
}