<?PHP
$sender = 'radekrukavica@gmail.com';
$recipient = 'lambeinovab@seznam.cz';

$subject = "php mail test";
$message = "php test message";
$headers = 'From:' . $sender;

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
?>