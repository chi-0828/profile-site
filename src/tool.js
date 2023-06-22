export function Path(props) {
    return (
		<p id="path"> 
			&nbsp;<i class="fa-brands fa-apple ico">&nbsp;&nbsp;</i>
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

export function Contact() {
    return (
        <div class="contact">
            <span class="text">
                <p><i class="fa-solid fa-envelope"></i> Email: your-email@gmail.com</p>
                <p><i class="fa-solid fa-phone"></i> Phone: +886 0000666888</p>
            </span>
        </div>
    );
}
