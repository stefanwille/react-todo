import React, { PropTypes } from 'react'

import RadioSelectionOption from 'components/RadioSelectionOption/RadioSelectionOption'

const RadioSelection = ({options, labels, selected, onChange}) => (
    <div className='btn-group' data-toggle='buttons'>
      {
        options.map((option) => {
          return (
            <RadioSelectionOption
                  key={option}
                  label={labels[option]}
                  option={option}
                  active={option === selected}
                  onChange={onChange}
                />
          )
        })
      }
  </div>
)

RadioSelection.propTypes = {
  options: PropTypes.array.isRequired,
  labels: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioSelection
