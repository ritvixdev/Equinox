import React from 'react'

const TrackSearchResult = ({ track, chooseTrack }) => {

    const handlePlay = () => {
        chooseTrack(track)
    }


  return (
    <div className='d-flex m-2 align-items-center' style={{cursor: "pointer"}} onClick={handlePlay}>
        <img src={track.albumUrl} style={{height: '64px', width: '64px'}} />
        <div className='ml-3 me-4'>
            <div>{track.title}</div>
            <div className='text-muted'>{track.artist}</div>
        </div>
        <button type="button" class="btn btn-dark ">Info</button>
    </div>
  )
}

export default TrackSearchResult