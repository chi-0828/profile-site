import contactraw from "./customization/Contact.json";

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



// export async function Notes(e) {
//     const response = await fetch(e.path)
//     if (!response.ok) {
//         throw new Error('Data coud not be fetched!')
//     } else {
//         const text = await response.text();
//         //console.log(text);
//         return text;
//     }
// }

export function Contact() {
    return (
        <div class="contact">
            <span class="text">
                <p><i class="fa-solid fa-envelope"></i> Email: {contactraw.email}</p>
                <p><i class="fa-solid fa-phone"></i> Phone: {contactraw.phone}</p>
            </span>
        </div>
    );
}
