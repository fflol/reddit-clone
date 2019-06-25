import React from 'react';

// import react-bootstrap components
import { Dropdown } from 'react-bootstrap'

import * as Styled from './postFooterStyle'
// import css
// import './PostFooter.css'


// component
function PostFooter({ footerParams }) {

    const { permalink, convertedUps, convertedComments } = footerParams

    return (
        <Styled.DivContainer>

            <Styled.DivScore>
                <Styled.ButtonScore>
                    <Styled.IconArrowUp />
                </Styled.ButtonScore>
                <Styled.SpanScore>{convertedUps}</Styled.SpanScore>
                <Styled.ButtonScore>
                    <Styled.IconArrowDown />
                </Styled.ButtonScore>
            </Styled.DivScore>

            <Styled.ALink 
                href={`https://www.reddit.com${permalink}#CommentSort--SortPicker`} 
                rel="noopener noreferrer" 
                target="_blank"
            >
                <Styled.IconText />
                <span>{convertedComments} comments</span>
            </Styled.ALink>

            <Styled.ALinkRes>
                <Styled.IconShare />
                <span>Share</span>
            </Styled.ALinkRes>

            <Styled.ALinkRes>
                <Styled.IconAdd />
                <span>Save</span>
            </Styled.ALinkRes>

            <Dropdown drop='up'>

                <Styled.DropdownToggle variant="">
                    <Styled.IconMore />
                </Styled.DropdownToggle>

                <Styled.DropdownMenu>

                    <Styled.DropdownItemRes>
                        <Styled.IconShare />
                        <span>Share</span>
                    </Styled.DropdownItemRes>

                    <Styled.DropdownDivider />

                    <Styled.DropdownItemRes>
                        <Styled.IconAdd />
                        <span>Save</span>
                    </Styled.DropdownItemRes>

                    <Styled.DropdownDivider />

                    <Styled.DropdownItem>
                        <Styled.IconFlag />
                        <span>Hide</span>
                    </Styled.DropdownItem>

                    <Dropdown.Divider />

                    <Styled.DropdownItem>
                        <Styled.IconRemove />
                        <span>Report</span>
                    </Styled.DropdownItem>

                </Styled.DropdownMenu>
            </Dropdown>
        </Styled.DivContainer>
    );
}

export default PostFooter;
