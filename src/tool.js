import Contactraw from "./customization/Contact.json";

export function Path(props) {
    return (
		<p class="path"> 
			<span>&nbsp;<i class="fa-brands fa-apple">&nbsp;&nbsp;</i></span>
			<span>&nbsp;&nbsp;<i class="fa fa-folder-open">&nbsp;</i>{props.path}&nbsp;&nbsp;</span>
		</p>
    );
}

export function Code(props) {
    return (
        <p id="code">
            &nbsp;&gt; {props.command} <br/>
        </p>
    );
}



export function ASCII() {
    return (
        <pre>
            <h2>
                <code>
{`
 _______  ______    _______  _______  ___  ___      _______       _______  ___  _______  _______ 
|       ||    _ |  |       ||       ||   ||   |    |       |     |       ||   ||       ||       |
|    _  ||   | ||  |   _   ||    ___||   ||   |    |    ___|____ |  _____||   ||_     _||    ___|
|   |_| ||   |_||_ |  | |  ||   |___ |   ||   |    |   |___|____|| |_____ |   |  |   |  |   |___ 
|    ___||    __  ||  |_|  ||    ___||   ||   |___ |    ___|     |_____  ||   |  |   |  |    ___|
|   |    |   |  | ||       ||   |    |   ||       ||   |___       _____| ||   |  |   |  |   |___ 
|___|    |___|  |_||_______||___|    |___||_______||_______|     |_______||___|  |___|  |_______|
                                                                                                                                                                                   
`}</code>                 
            </h2>
        </pre>
    );
}

export function Contact() {
    return (
        <div class="contact">
            <p><i class="fa-solid fa-envelope"></i> Email: {Contactraw.email}</p>
            <p><i class="fa-solid fa-phone"></i> Phone: {Contactraw.phone}</p>
        </div>
    );
}
