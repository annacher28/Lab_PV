<?php
$x = 15; 

$S_for = 0;
for ($i = 3; $i <= $x; $i += 2) {
    $S_for += $i;
}

$S_while = 0;
$i = 3;
while ($i <= $x) {
    $S_while += $i;
    $i += 2;
}

echo "Сумма через for: $S_for\n";
echo "Сумма через while: $S_while\n";
?>