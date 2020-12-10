import React from 'react';
import PropType from 'prop-types'
import Link from 'next/link'


const PostCardContent = ({ postData }) => {
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((val, i) => {
                if(val.match(/(#[^\s#]+)/g)) {
                    return <Link href={`//hashtag${val.slice(1)}`} key={i} ><a>{val}</a></Link>
                }
                return val
            })}
        </div>
    );
};

PostCardContent.PropType = {
    postData: PropType.string.isRequired
}

export default PostCardContent;