<?php
$A = [5, 2, 30, 95, 12, 60, 8, 45, 25, 10];
$K = 20;
$result = [];

foreach ($A as $number) {
    if ($number > $K) {
        $result[] = $number;
    }
}

echo "Исходный массив A: " . implode(', ', $A) . "\n";
echo "Заданное число K: " . $K . "\n";
echo "Числа большие чем K: " . implode(', ', $result) . "\n";
?>